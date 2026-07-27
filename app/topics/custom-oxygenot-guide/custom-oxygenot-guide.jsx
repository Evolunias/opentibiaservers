import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-guide');
}

export default function CustomOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-guide" />;
}
