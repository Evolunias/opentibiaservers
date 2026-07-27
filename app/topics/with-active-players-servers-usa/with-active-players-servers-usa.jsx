import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-usa');
}

export default function WithActivePlayersServersUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-usa" />;
}
