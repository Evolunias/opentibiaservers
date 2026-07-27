import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-usa');
}

export default function BaiakPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-usa" />;
}
