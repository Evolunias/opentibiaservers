import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-online');
}

export default function PopularOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-online" />;
}
