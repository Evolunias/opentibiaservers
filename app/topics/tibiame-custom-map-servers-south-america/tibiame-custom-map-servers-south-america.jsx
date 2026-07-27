import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-south-america');
}

export default function TibiameCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-south-america" />;
}
