import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-mexico');
}

export default function MediviaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-mexico" />;
}
