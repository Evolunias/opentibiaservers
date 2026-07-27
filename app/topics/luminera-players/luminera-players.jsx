import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-players');
}

export default function LumineraPlayersKeywordPage() {
  return <StaticKeywordPage slug="luminera-players" />;
}
