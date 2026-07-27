import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-online');
}

export default function HighrateEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-online" />;
}
