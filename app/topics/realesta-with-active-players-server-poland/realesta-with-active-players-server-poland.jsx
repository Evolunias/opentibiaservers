import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-poland');
}

export default function RealestaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-poland" />;
}
