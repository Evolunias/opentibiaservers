import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-canada');
}

export default function HarmoniaOtEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-canada" />;
}
