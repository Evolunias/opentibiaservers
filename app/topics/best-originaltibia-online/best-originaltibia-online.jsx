import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-online');
}

export default function BestOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-online" />;
}
