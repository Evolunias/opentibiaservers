import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-latin-america');
}

export default function WithActivePlayersGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-latin-america" />;
}
