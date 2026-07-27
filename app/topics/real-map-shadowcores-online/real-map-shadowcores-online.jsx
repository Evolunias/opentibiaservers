import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-online');
}

export default function RealMapShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-online" />;
}
