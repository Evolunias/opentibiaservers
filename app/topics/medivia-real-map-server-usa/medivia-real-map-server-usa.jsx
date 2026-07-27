import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-usa');
}

export default function MediviaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-usa" />;
}
