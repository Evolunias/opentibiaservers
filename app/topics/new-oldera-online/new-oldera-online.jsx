import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-online');
}

export default function NewOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-online" />;
}
