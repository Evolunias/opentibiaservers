import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-online');
}

export default function HighrateKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-online" />;
}
