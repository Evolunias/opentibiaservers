import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-germany');
}

export default function HarmoniaOtEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-germany" />;
}
