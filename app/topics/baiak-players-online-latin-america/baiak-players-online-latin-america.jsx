import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-latin-america');
}

export default function BaiakPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-latin-america" />;
}
