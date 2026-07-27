import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-online');
}

export default function NewSeasonMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-online" />;
}
