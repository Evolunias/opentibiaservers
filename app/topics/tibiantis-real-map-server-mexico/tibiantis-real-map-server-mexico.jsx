import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-mexico');
}

export default function TibiantisRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-mexico" />;
}
