import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-germany');
}

export default function KasteriaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-germany" />;
}
