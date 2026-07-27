import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-canada');
}

export default function ThaisotNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-canada" />;
}
