import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-usa');
}

export default function KasteriaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-usa" />;
}
