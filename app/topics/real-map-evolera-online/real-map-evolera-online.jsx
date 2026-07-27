import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-online');
}

export default function RealMapEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-online" />;
}
