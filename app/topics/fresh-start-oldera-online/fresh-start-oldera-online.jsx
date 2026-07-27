import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-online');
}

export default function FreshStartOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-online" />;
}
