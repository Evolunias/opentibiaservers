import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-online');
}

export default function NewSeasonKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-online" />;
}
