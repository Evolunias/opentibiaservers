import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-online');
}

export default function CustomOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-online" />;
}
