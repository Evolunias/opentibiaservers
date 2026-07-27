import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-online');
}

export default function OfficialOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-online" />;
}
