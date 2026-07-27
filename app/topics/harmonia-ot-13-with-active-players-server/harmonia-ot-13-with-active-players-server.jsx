import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-with-active-players-server');
}

export default function HarmoniaOt13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-with-active-players-server" />;
}
