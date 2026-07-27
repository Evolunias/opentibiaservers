import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-canada');
}

export default function BaiakPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-canada" />;
}
