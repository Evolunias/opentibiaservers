import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-online');
}

export default function NewSeasonOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-online" />;
}
