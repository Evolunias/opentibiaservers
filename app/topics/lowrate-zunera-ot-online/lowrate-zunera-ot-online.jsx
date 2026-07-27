import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-online');
}

export default function LowrateZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-online" />;
}
