import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-online');
}

export default function BestCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-online" />;
}
