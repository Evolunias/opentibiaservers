import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-online');
}

export default function FreshStartMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-online" />;
}
