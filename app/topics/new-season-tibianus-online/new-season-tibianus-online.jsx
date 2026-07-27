import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-online');
}

export default function NewSeasonTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-online" />;
}
