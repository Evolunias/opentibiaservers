import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-online');
}

export default function HighrateNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-online" />;
}
