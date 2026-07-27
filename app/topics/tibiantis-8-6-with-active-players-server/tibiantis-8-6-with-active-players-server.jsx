import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-6-with-active-players-server');
}

export default function Tibiantis86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-6-with-active-players-server" />;
}
