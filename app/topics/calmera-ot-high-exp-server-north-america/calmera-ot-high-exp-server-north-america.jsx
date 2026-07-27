import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-north-america');
}

export default function CalmeraOtHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-north-america" />;
}
