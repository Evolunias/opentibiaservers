import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-north-america');
}

export default function WithActivePlayersGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-north-america" />;
}
