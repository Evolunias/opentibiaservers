import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-canada');
}

export default function TibiantisCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-canada" />;
}
