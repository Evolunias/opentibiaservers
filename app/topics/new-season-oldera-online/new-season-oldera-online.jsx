import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-online');
}

export default function NewSeasonOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-online" />;
}
