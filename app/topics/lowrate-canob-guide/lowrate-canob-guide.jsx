import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-guide');
}

export default function LowrateCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-guide" />;
}
