import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-online');
}

export default function NewSeasonClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-online" />;
}
