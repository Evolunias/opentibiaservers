import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-sweden');
}

export default function OxygenotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-sweden" />;
}
