import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-online');
}

export default function PopularCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-online" />;
}
