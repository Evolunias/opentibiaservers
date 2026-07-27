import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-mexico');
}

export default function TibiantisRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-mexico" />;
}
