import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-mexico');
}

export default function NostaltherRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-mexico" />;
}
