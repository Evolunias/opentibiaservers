import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-brazil');
}

export default function NilotWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-brazil" />;
}
