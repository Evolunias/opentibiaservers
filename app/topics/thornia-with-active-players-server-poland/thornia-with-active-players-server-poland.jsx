import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-poland');
}

export default function ThorniaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-poland" />;
}
