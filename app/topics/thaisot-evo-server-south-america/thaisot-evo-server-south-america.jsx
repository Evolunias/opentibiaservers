import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-south-america');
}

export default function ThaisotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-south-america" />;
}
