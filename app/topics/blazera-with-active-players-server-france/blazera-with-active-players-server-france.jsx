import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-france');
}

export default function BlazeraWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-france" />;
}
