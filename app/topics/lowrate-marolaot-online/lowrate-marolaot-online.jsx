import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-online');
}

export default function LowrateMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-online" />;
}
