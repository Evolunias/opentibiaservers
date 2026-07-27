import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-north-america');
}

export default function BaiakPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-north-america" />;
}
