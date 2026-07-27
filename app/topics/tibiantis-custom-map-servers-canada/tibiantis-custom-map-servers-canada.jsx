import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-canada');
}

export default function TibiantisCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-canada" />;
}
