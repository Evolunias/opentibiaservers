import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-guide');
}

export default function PopularTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-guide" />;
}
