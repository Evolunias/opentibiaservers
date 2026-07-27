import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-online');
}

export default function OfficialOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-online" />;
}
