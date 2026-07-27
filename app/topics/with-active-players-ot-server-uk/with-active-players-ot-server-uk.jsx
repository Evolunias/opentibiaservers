import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-uk');
}

export default function WithActivePlayersOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-uk" />;
}
