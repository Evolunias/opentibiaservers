import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-with-active-players-server');
}

export default function Shadowcores13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-with-active-players-server" />;
}
