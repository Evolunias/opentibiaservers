import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-mexico');
}

export default function TibiaraRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-mexico" />;
}
