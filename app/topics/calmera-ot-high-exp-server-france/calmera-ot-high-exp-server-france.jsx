import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-france');
}

export default function CalmeraOtHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-france" />;
}
