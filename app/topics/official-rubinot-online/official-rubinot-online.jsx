import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-online');
}

export default function OfficialRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-online" />;
}
