import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-evo-server');
}

export default function HarmoniaOt81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-evo-server" />;
}
