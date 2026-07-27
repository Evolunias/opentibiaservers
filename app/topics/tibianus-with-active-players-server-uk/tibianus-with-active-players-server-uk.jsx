import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-uk');
}

export default function TibianusWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-uk" />;
}
