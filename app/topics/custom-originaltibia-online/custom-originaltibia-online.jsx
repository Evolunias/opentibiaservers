import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-online');
}

export default function CustomOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-online" />;
}
