import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-germany');
}

export default function KasteriaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-germany" />;
}
