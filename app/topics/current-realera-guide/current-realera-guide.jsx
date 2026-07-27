import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-guide');
}

export default function CurrentRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="current-realera-guide" />;
}
