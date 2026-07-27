import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-online');
}

export default function NewTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-online" />;
}
