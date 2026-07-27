import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-poland');
}

export default function NilotWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-poland" />;
}
