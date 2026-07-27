import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-servers-usa');
}

export default function HarmoniaOtEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-servers-usa" />;
}
