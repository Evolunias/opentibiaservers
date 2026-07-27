import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-online');
}

export default function NewSeasonCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-online" />;
}
