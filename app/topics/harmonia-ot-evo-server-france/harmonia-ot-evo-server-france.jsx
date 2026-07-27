import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-france');
}

export default function HarmoniaOtEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-france" />;
}
