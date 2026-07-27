import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-guide');
}

export default function ActiveThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-guide" />;
}
