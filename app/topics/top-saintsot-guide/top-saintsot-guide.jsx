import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-guide');
}

export default function TopSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-guide" />;
}
