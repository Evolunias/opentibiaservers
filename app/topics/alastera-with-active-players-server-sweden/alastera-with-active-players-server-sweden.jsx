import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-sweden');
}

export default function AlasteraWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-sweden" />;
}
