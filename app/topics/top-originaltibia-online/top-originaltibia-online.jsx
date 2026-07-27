import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-online');
}

export default function TopOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-online" />;
}
