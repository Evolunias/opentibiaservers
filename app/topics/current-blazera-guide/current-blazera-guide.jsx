import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-guide');
}

export default function CurrentBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-guide" />;
}
