import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-online');
}

export default function CurrentOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-online" />;
}
