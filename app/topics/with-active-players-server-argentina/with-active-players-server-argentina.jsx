import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-argentina');
}

export default function WithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-argentina" />;
}
