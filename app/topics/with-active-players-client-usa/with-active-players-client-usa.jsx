import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-usa');
}

export default function WithActivePlayersClientUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-usa" />;
}
