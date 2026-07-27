import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-guide');
}

export default function TopTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-guide" />;
}
