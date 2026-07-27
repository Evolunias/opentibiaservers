import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-online');
}

export default function HighrateHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-online" />;
}
