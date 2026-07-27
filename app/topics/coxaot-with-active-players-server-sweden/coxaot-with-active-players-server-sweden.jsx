import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-active-players-server-sweden');
}

export default function CoxaotWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-active-players-server-sweden" />;
}
