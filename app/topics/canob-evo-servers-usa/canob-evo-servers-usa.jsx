import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-servers-usa');
}

export default function CanobEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-servers-usa" />;
}
