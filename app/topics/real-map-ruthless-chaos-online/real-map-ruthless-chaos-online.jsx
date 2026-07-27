import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-online');
}

export default function RealMapRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-online" />;
}
