import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-evo-server');
}

export default function HarmoniaOt14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-evo-server" />;
}
