import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-online');
}

export default function ActiveOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-online" />;
}
