import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-south-america');
}

export default function EvoleraEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-south-america" />;
}
