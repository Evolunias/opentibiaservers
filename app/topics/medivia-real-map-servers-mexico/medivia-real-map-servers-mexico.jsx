import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-mexico');
}

export default function MediviaRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-mexico" />;
}
