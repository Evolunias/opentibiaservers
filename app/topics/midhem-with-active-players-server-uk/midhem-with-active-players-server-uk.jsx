import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-uk');
}

export default function MidhemWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-uk" />;
}
