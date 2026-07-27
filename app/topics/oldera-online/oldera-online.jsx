import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-online');
}

export default function OlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="oldera-online" />;
}
