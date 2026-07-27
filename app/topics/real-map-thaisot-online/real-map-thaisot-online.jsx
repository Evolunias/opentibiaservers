import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-online');
}

export default function RealMapThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-online" />;
}
