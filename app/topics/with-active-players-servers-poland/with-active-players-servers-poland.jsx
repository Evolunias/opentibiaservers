import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-poland');
}

export default function WithActivePlayersServersPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-poland" />;
}
