import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-evo-server');
}

export default function HarmoniaOt11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-evo-server" />;
}
