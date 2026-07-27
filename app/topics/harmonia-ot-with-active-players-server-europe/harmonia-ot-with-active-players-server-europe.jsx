import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-active-players-server-europe');
}

export default function HarmoniaOtWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-active-players-server-europe" />;
}
