import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-south-america');
}

export default function InfernalOtEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-south-america" />;
}
