import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-north-america');
}

export default function HarmoniaOtEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-north-america" />;
}
