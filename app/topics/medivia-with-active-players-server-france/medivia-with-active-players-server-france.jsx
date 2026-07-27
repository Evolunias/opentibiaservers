import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-france');
}

export default function MediviaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-france" />;
}
