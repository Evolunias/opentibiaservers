import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-canada');
}

export default function WithActivePlayersGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-canada" />;
}
