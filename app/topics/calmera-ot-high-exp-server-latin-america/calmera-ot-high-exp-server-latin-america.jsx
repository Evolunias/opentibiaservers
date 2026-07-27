import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-latin-america');
}

export default function CalmeraOtHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-latin-america" />;
}
