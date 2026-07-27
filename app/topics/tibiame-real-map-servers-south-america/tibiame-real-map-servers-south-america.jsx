import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-south-america');
}

export default function TibiameRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-south-america" />;
}
