import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-poland');
}

export default function WithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-poland" />;
}
