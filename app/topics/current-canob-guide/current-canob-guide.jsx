import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-guide');
}

export default function CurrentCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="current-canob-guide" />;
}
