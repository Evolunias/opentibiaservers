import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-germany');
}

export default function BaiakPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-germany" />;
}
