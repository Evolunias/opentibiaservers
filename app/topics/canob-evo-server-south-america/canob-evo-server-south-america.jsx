import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-south-america');
}

export default function CanobEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-south-america" />;
}
