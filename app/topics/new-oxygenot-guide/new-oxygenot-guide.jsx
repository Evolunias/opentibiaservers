import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-guide');
}

export default function NewOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-guide" />;
}
