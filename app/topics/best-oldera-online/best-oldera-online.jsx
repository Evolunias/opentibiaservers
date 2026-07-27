import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-online');
}

export default function BestOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-online" />;
}
