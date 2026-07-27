import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-online');
}

export default function BestMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-online" />;
}
