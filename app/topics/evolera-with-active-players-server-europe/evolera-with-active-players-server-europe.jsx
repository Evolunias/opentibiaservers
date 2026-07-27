import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-active-players-server-europe');
}

export default function EvoleraWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-active-players-server-europe" />;
}
