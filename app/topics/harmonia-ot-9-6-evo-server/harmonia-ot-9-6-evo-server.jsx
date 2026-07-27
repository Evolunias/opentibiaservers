import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-evo-server');
}

export default function HarmoniaOt96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-evo-server" />;
}
