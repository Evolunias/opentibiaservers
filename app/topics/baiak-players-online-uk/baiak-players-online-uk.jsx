import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-uk');
}

export default function BaiakPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-uk" />;
}
