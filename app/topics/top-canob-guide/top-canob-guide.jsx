import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-guide');
}

export default function TopCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="top-canob-guide" />;
}
