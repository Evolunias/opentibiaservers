import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-europe');
}

export default function InfernalOtEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-europe" />;
}
