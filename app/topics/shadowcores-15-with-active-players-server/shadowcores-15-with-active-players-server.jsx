import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-with-active-players-server');
}

export default function Shadowcores15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-with-active-players-server" />;
}
