import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-mexico');
}

export default function NostaltherRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-mexico" />;
}
