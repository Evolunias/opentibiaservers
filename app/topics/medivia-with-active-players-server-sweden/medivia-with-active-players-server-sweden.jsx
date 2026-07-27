import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-sweden');
}

export default function MediviaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-sweden" />;
}
