import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-online');
}

export default function RealMapUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-online" />;
}
