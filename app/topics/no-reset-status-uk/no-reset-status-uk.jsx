import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-uk');
}

export default function NoResetStatusUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-uk" />;
}
