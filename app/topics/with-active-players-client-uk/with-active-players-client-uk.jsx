import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-uk');
}

export default function WithActivePlayersClientUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-uk" />;
}
