import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-europe');
}

export default function NoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-europe" />;
}
