import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-poland');
}

export default function BaiakPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-poland" />;
}
