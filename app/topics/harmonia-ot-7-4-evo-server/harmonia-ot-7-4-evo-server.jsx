import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-4-evo-server');
}

export default function HarmoniaOt74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-4-evo-server" />;
}
