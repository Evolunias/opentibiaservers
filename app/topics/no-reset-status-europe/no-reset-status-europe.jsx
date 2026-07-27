import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-europe');
}

export default function NoResetStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-europe" />;
}
