import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-uk');
}

export default function WithActivePlayersGuideUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-uk" />;
}
