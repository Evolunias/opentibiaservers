import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-europe');
}

export default function ThorniaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-europe" />;
}
