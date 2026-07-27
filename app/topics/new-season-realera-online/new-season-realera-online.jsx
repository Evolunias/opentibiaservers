import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-online');
}

export default function NewSeasonRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-online" />;
}
