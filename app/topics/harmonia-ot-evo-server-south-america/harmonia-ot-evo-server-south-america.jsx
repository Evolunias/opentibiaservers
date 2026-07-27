import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-south-america');
}

export default function HarmoniaOtEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-south-america" />;
}
