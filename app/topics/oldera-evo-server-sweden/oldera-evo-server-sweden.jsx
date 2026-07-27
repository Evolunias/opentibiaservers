import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-sweden');
}

export default function OlderaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-sweden" />;
}
