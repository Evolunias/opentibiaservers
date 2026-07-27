import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-poland');
}

export default function InfernalOtEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-poland" />;
}
