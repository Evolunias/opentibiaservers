import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-north-america');
}

export default function MediviaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-north-america" />;
}
