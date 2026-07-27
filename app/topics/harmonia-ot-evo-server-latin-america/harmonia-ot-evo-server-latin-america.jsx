import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-latin-america');
}

export default function HarmoniaOtEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-latin-america" />;
}
