import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-germany');
}

export default function TibiameRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-germany" />;
}
