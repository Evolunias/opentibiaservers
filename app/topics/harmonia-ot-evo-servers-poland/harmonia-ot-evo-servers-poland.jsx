import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-servers-poland');
}

export default function HarmoniaOtEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-servers-poland" />;
}
