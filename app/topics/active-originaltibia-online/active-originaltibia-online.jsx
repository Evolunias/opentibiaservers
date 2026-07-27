import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-online');
}

export default function ActiveOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-online" />;
}
