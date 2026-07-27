import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-europe');
}

export default function NoResetClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-europe" />;
}
