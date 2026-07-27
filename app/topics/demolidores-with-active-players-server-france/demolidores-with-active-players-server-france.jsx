import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-active-players-server-france');
}

export default function DemolidoresWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-active-players-server-france" />;
}
