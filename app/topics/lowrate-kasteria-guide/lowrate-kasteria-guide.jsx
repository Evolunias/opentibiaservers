import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-guide');
}

export default function LowrateKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-guide" />;
}
