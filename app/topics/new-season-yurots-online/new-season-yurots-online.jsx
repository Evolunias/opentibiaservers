import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-online');
}

export default function NewSeasonYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-online" />;
}
