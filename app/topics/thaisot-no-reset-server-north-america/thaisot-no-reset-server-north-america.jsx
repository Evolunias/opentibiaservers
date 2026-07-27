import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-north-america');
}

export default function ThaisotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-north-america" />;
}
