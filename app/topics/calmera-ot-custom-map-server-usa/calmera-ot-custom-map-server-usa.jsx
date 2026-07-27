import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-usa');
}

export default function CalmeraOtCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-usa" />;
}
