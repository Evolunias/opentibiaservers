import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-evo-server');
}

export default function HarmoniaOt15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-evo-server" />;
}
