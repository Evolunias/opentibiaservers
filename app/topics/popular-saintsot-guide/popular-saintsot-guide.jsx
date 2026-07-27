import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-guide');
}

export default function PopularSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-guide" />;
}
