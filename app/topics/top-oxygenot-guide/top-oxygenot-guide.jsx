import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-guide');
}

export default function TopOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-guide" />;
}
