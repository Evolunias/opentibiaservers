import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-online');
}

export default function RealMapArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-online" />;
}
