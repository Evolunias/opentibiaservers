import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-uk');
}

export default function BlazeraWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-uk" />;
}
