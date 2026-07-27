import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-servers-brazil');
}

export default function HarmoniaOtEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-servers-brazil" />;
}
