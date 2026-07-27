import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-guide');
}

export default function BestSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-guide" />;
}
