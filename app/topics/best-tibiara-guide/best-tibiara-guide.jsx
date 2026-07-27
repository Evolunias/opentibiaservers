import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-guide');
}

export default function BestTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-guide" />;
}
