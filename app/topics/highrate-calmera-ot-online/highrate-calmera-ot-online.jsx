import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-online');
}

export default function HighrateCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-online" />;
}
