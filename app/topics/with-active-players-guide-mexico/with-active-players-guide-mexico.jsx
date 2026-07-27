import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-mexico');
}

export default function WithActivePlayersGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-mexico" />;
}
