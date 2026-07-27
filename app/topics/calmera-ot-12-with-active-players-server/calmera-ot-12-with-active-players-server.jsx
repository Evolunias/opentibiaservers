import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-with-active-players-server');
}

export default function CalmeraOt12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-with-active-players-server" />;
}
