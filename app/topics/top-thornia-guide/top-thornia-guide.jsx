import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-guide');
}

export default function TopThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-guide" />;
}
