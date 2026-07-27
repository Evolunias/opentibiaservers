import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-argentina');
}

export default function NilotWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-argentina" />;
}
