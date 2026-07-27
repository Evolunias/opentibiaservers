import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-players-online');
}

export default function BaiakIlusionPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-players-online" />;
}
