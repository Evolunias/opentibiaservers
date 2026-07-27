import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-uk');
}

export default function ThorniaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-uk" />;
}
