import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-online');
}

export default function TopCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-online" />;
}
