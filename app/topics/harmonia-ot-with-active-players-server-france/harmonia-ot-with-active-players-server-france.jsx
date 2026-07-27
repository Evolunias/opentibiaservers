import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-active-players-server-france');
}

export default function HarmoniaOtWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-active-players-server-france" />;
}
