import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-guide');
}

export default function NewThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-guide" />;
}
