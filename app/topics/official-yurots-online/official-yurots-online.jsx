import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-online');
}

export default function OfficialYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-online" />;
}
