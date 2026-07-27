import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-europe');
}

export default function BaiakPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-europe" />;
}
