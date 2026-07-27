import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-with-players');
}

export default function OtlandServerGalaWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-with-players" />;
}
