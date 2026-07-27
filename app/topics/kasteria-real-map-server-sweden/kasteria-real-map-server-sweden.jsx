import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-sweden');
}

export default function KasteriaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-sweden" />;
}
