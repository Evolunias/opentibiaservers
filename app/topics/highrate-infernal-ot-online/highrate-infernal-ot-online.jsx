import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-online');
}

export default function HighrateInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-online" />;
}
