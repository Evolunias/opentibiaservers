import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-usa');
}

export default function CanobEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-usa" />;
}
