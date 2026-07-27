import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-online');
}

export default function RealMapKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-online" />;
}
