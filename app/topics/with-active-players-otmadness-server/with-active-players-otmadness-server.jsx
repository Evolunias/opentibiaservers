import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-otmadness-server');
}

export default function WithActivePlayersOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-otmadness-server" />;
}
