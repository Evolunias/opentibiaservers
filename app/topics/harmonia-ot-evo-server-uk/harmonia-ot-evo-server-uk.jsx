import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-uk');
}

export default function HarmoniaOtEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-uk" />;
}
