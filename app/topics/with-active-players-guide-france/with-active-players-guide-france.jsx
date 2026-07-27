import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-france');
}

export default function WithActivePlayersGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-france" />;
}
