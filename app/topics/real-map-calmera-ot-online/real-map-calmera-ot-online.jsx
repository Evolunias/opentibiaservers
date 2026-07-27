import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-online');
}

export default function RealMapCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-online" />;
}
