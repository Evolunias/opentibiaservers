import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-france');
}

export default function AlasteraWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-france" />;
}
