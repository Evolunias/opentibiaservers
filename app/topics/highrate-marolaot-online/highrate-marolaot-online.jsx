import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-online');
}

export default function HighrateMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-online" />;
}
