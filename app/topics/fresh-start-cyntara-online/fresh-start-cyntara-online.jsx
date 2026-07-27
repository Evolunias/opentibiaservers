import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-online');
}

export default function FreshStartCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-online" />;
}
