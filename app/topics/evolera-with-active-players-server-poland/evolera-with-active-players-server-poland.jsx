import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-active-players-server-poland');
}

export default function EvoleraWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-active-players-server-poland" />;
}
