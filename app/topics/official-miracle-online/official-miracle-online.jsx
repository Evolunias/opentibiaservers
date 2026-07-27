import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-online');
}

export default function OfficialMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-online" />;
}
