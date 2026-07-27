import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-with-active-players-server');
}

export default function Shadowcores12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-with-active-players-server" />;
}
