import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-usa');
}

export default function NilotWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-usa" />;
}
