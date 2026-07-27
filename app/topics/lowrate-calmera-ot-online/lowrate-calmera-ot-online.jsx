import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-online');
}

export default function LowrateCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-online" />;
}
