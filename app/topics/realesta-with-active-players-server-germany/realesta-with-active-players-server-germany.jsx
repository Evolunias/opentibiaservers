import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-germany');
}

export default function RealestaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-germany" />;
}
