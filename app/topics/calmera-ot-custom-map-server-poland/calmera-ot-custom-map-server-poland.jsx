import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-poland');
}

export default function CalmeraOtCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-poland" />;
}
