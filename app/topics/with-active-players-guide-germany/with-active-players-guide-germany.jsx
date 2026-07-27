import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-germany');
}

export default function WithActivePlayersGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-germany" />;
}
