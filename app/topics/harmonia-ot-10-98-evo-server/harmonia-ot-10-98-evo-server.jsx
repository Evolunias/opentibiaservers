import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-98-evo-server');
}

export default function HarmoniaOt1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-98-evo-server" />;
}
