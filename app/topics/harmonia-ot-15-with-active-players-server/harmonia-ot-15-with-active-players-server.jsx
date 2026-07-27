import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-with-active-players-server');
}

export default function HarmoniaOt15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-with-active-players-server" />;
}
