import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-players');
}

export default function SecuraPlayersKeywordPage() {
  return <StaticKeywordPage slug="secura-players" />;
}
