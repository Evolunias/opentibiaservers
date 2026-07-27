import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-online');
}

export default function NewSeasonNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-online" />;
}
