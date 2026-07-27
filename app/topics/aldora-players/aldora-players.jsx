import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-players');
}

export default function AldoraPlayersKeywordPage() {
  return <StaticKeywordPage slug="aldora-players" />;
}
