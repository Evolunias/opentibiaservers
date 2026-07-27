import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-guide');
}

export default function FreshStartThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-guide" />;
}
