import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-low-exp-server-france');
}

export default function CalmeraOtLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-low-exp-server-france" />;
}
