import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-online');
}

export default function NewSeasonRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-online" />;
}
