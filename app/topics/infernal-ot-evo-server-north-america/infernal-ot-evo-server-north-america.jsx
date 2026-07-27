import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-north-america');
}

export default function InfernalOtEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-north-america" />;
}
