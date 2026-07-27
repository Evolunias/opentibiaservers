import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-online');
}

export default function OfficialMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-online" />;
}
