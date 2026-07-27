import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-online');
}

export default function RealMapYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-online" />;
}
