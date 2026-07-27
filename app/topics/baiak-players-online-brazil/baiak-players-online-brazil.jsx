import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-brazil');
}

export default function BaiakPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-brazil" />;
}
