import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-with-active-players-server');
}

export default function CalmeraOt15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-with-active-players-server" />;
}
