import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-online');
}

export default function NewSeasonSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-online" />;
}
