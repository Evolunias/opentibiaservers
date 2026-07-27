import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-active-players-server-germany');
}

export default function ImperianicWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-active-players-server-germany" />;
}
