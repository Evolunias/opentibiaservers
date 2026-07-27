import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-players');
}

export default function CelestaPlayersKeywordPage() {
  return <StaticKeywordPage slug="celesta-players" />;
}
