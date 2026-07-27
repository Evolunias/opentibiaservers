import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-active-players-server-sweden');
}

export default function DemolidoresWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-active-players-server-sweden" />;
}
