import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-south-america');
}

export default function TibiameCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-south-america" />;
}
