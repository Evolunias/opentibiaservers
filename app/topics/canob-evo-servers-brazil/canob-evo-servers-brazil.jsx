import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-servers-brazil');
}

export default function CanobEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-servers-brazil" />;
}
