import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-guide');
}

export default function ThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="thornia-guide" />;
}
