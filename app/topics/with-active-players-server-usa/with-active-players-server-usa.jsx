import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-usa');
}

export default function WithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-usa" />;
}
