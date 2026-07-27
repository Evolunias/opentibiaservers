import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-online');
}

export default function HighrateAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-online" />;
}
