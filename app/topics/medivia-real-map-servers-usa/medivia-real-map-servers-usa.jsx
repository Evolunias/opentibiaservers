import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-usa');
}

export default function MediviaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-usa" />;
}
