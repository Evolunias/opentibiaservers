import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-active-players-server-germany');
}

export default function EvoleraWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-active-players-server-germany" />;
}
