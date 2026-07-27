import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-online');
}

export default function RealMapAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-online" />;
}
