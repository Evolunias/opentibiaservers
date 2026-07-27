import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-guide');
}

export default function CurrentThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-guide" />;
}
