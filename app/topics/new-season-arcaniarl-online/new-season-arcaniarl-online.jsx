import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-online');
}

export default function NewSeasonArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-online" />;
}
