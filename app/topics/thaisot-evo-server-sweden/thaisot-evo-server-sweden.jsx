import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-sweden');
}

export default function ThaisotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-sweden" />;
}
