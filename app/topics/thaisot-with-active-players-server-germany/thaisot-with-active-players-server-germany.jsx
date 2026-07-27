import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-germany');
}

export default function ThaisotWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-germany" />;
}
