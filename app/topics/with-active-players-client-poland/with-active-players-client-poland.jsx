import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-poland');
}

export default function WithActivePlayersClientPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-poland" />;
}
