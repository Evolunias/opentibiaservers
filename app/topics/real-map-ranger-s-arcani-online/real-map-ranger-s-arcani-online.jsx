import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-online');
}

export default function RealMapRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-online" />;
}
