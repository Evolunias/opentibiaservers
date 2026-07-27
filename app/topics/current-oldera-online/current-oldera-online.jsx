import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-online');
}

export default function CurrentOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-online" />;
}
