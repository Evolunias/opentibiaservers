import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-mexico');
}

export default function RealestaWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-mexico" />;
}
