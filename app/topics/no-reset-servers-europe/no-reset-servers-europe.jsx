import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-europe');
}

export default function NoResetServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-europe" />;
}
