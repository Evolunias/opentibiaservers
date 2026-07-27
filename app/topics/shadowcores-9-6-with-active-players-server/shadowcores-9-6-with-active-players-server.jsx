import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-with-active-players-server');
}

export default function Shadowcores96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-with-active-players-server" />;
}
