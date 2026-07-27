import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-guide');
}

export default function NoResetRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-guide" />;
}
