import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-usa');
}

export default function CalmeraOtCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-usa" />;
}
