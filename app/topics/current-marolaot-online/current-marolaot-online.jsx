import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-online');
}

export default function CurrentMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-online" />;
}
