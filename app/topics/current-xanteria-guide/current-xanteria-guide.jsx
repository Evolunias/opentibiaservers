import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-guide');
}

export default function CurrentXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-guide" />;
}
