import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-online');
}

export default function LowrateTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-online" />;
}
