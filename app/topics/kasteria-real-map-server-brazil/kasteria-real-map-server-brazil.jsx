import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-brazil');
}

export default function KasteriaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-brazil" />;
}
