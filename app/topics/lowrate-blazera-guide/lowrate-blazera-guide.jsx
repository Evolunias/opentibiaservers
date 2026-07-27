import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-guide');
}

export default function LowrateBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-guide" />;
}
