import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-mexico');
}

export default function BaiakPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-mexico" />;
}
