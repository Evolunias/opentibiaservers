import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-argentina');
}

export default function KasteriaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-argentina" />;
}
