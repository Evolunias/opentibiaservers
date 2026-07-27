import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-sweden');
}

export default function MidhemEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-sweden" />;
}
