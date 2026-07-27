import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-uk');
}

export default function MediviaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-uk" />;
}
