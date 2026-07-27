import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-usa');
}

export default function KasteriaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-usa" />;
}
