import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-guide');
}

export default function ActiveClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-guide" />;
}
