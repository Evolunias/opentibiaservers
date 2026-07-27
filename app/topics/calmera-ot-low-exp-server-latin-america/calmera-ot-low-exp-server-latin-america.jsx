import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-low-exp-server-latin-america');
}

export default function CalmeraOtLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-low-exp-server-latin-america" />;
}
