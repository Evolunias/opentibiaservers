import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-with-active-players-server');
}

export default function HarmoniaOt14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-with-active-players-server" />;
}
