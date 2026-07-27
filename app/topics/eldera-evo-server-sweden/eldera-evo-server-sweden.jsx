import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-sweden');
}

export default function ElderaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-sweden" />;
}
