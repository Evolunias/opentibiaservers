import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-online');
}

export default function PopularMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-online" />;
}
