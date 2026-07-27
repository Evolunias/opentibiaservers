import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-online');
}

export default function RealMapHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-online" />;
}
