import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-uk');
}

export default function InfernalOtEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-uk" />;
}
