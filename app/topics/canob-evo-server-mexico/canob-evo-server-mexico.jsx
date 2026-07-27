import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-mexico');
}

export default function CanobEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-mexico" />;
}
