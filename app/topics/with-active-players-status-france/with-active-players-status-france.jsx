import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-france');
}

export default function WithActivePlayersStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-france" />;
}
