import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-europe');
}

export default function WithActivePlayersGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-europe" />;
}
