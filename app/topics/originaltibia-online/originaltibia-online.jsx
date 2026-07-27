import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-online');
}

export default function OriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-online" />;
}
