import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-uk');
}

export default function CalmeraOtCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-uk" />;
}
