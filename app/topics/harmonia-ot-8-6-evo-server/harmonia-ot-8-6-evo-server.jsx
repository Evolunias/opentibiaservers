import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-evo-server');
}

export default function HarmoniaOt86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-evo-server" />;
}
