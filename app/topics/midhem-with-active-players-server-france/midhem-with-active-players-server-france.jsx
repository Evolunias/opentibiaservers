import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-france');
}

export default function MidhemWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-france" />;
}
