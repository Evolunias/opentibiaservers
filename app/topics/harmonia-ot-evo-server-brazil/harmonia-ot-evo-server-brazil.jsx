import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-brazil');
}

export default function HarmoniaOtEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-brazil" />;
}
