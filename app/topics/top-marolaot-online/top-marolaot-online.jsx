import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-online');
}

export default function TopMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-online" />;
}
