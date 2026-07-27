import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-uk');
}

export default function ThaisotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-uk" />;
}
