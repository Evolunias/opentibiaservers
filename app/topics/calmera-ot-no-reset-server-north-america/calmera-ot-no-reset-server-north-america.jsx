import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-no-reset-server-north-america');
}

export default function CalmeraOtNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-no-reset-server-north-america" />;
}
