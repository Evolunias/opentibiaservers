import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-south-america');
}

export default function KasteriaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-south-america" />;
}
