import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-sweden');
}

export default function WithActivePlayersOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-sweden" />;
}
