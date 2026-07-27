import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-online');
}

export default function LowrateOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-online" />;
}
