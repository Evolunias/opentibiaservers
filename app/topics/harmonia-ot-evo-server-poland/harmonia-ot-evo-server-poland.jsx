import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-poland');
}

export default function HarmoniaOtEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-poland" />;
}
