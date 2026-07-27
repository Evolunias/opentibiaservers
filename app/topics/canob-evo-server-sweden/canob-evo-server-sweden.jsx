import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-sweden');
}

export default function CanobEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-sweden" />;
}
