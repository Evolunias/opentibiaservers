import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-online');
}

export default function NewSeasonImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-online" />;
}
