import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-europe');
}

export default function HarmoniaOtEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-europe" />;
}
