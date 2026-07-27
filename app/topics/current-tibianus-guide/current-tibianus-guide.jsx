import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-guide');
}

export default function CurrentTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-guide" />;
}
