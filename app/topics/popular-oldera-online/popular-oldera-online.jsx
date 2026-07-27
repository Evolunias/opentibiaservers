import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-online');
}

export default function PopularOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-online" />;
}
