import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-online');
}

export default function RealMapClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-online" />;
}
