import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-guide');
}

export default function CurrentTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-guide" />;
}
