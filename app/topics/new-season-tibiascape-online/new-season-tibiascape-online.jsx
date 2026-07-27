import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-online');
}

export default function NewSeasonTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-online" />;
}
