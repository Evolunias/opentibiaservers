import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-active-players-server-uk');
}

export default function LumineraWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-active-players-server-uk" />;
}
