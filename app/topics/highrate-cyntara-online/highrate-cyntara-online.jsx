import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-online');
}

export default function HighrateCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-online" />;
}
