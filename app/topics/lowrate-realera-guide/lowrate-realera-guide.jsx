import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-guide');
}

export default function LowrateRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-guide" />;
}
