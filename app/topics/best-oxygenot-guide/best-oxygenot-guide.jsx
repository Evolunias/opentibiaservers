import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-guide');
}

export default function BestOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-guide" />;
}
