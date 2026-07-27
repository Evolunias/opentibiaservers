import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-poland');
}

export default function WithActivePlayersGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-poland" />;
}
