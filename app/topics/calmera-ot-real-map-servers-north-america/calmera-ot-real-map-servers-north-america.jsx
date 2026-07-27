import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-north-america');
}

export default function CalmeraOtRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-north-america" />;
}
