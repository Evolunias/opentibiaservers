import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-uk');
}

export default function RealeraWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-uk" />;
}
