import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-online');
}

export default function LowrateCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-online" />;
}
