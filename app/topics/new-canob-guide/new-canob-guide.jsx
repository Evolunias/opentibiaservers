import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-guide');
}

export default function NewCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="new-canob-guide" />;
}
