import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-online');
}

export default function RealMapMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-online" />;
}
