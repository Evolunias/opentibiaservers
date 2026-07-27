import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-usa');
}

export default function WithActivePlayersGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-usa" />;
}
