import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-argentina');
}

export default function WithActivePlayersServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-argentina" />;
}
