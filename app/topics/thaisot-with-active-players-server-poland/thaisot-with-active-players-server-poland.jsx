import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-poland');
}

export default function ThaisotWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-poland" />;
}
