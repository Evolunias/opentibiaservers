import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-sweden');
}

export default function AlasteraEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-sweden" />;
}
