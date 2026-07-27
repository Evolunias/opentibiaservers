import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-argentina');
}

export default function RealestaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-argentina" />;
}
