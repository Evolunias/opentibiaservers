import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-sweden');
}

export default function RealestaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-sweden" />;
}
