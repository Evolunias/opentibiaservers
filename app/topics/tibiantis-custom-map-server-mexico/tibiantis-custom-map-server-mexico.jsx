import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-mexico');
}

export default function TibiantisCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-mexico" />;
}
