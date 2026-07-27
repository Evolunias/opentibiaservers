import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-sweden');
}

export default function BaiakPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-sweden" />;
}
