import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-online');
}

export default function NewSeasonBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-online" />;
}
