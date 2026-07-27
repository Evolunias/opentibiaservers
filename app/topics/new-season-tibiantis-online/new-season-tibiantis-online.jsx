import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-online');
}

export default function NewSeasonTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-online" />;
}
