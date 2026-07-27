import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-germany');
}

export default function NilotWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-germany" />;
}
