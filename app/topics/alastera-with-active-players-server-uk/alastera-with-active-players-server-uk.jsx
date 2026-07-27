import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-uk');
}

export default function AlasteraWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-uk" />;
}
