import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-north-america');
}

export default function MediviaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-north-america" />;
}
