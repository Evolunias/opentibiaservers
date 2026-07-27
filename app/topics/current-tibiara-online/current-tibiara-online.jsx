import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-online');
}

export default function CurrentTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-online" />;
}
