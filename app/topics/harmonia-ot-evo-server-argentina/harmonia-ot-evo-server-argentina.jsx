import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-argentina');
}

export default function HarmoniaOtEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-argentina" />;
}
