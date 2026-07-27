import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-players');
}

export default function InfernaPlayersKeywordPage() {
  return <StaticKeywordPage slug="inferna-players" />;
}
