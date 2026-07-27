import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-brazil');
}

export default function CanobEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-brazil" />;
}
