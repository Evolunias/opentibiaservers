import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-argentina');
}

export default function WithActivePlayersClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-argentina" />;
}
