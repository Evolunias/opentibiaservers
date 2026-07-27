import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-brazil');
}

export default function RealestaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-brazil" />;
}
