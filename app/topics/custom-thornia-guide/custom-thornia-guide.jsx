import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-guide');
}

export default function CustomThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-guide" />;
}
