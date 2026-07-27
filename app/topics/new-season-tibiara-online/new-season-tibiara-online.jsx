import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-online');
}

export default function NewSeasonTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-online" />;
}
