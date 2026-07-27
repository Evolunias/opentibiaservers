import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-argentina');
}

export default function CanobEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-argentina" />;
}
