import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-usa');
}

export default function HarmoniaOtEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-usa" />;
}
