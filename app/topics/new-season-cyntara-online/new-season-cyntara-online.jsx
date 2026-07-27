import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-online');
}

export default function NewSeasonCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-online" />;
}
