import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-evo-server');
}

export default function HarmoniaOt13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-evo-server" />;
}
