import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-guide');
}

export default function BestTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-guide" />;
}
