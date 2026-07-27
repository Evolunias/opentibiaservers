import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-online');
}

export default function NewSeasonNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-online" />;
}
