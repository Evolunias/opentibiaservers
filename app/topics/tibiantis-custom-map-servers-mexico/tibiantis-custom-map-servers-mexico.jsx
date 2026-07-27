import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-mexico');
}

export default function TibiantisCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-mexico" />;
}
