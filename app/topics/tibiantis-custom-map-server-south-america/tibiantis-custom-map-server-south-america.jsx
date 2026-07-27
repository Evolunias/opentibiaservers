import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-south-america');
}

export default function TibiantisCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-south-america" />;
}
