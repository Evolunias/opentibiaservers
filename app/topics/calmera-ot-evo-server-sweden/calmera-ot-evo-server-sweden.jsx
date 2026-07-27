import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-sweden');
}

export default function CalmeraOtEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-sweden" />;
}
