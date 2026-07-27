import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-online');
}

export default function ElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="eldera-online" />;
}
