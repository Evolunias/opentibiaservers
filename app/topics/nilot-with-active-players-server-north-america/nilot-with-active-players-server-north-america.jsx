import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-north-america');
}

export default function NilotWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-north-america" />;
}
