import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-europe');
}

export default function CalmeraOtCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-europe" />;
}
