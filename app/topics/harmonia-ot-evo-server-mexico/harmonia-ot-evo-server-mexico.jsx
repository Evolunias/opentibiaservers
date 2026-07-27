import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-mexico');
}

export default function HarmoniaOtEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-mexico" />;
}
