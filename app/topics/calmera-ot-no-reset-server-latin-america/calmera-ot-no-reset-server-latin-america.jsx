import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-no-reset-server-latin-america');
}

export default function CalmeraOtNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-no-reset-server-latin-america" />;
}
