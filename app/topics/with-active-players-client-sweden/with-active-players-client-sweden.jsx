import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-sweden');
}

export default function WithActivePlayersClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-sweden" />;
}
