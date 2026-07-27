import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-online');
}

export default function CurrentCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-online" />;
}
