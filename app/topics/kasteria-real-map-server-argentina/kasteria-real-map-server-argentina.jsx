import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-argentina');
}

export default function KasteriaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-argentina" />;
}
