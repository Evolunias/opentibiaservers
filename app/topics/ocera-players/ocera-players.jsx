import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-players');
}

export default function OceraPlayersKeywordPage() {
  return <StaticKeywordPage slug="ocera-players" />;
}
