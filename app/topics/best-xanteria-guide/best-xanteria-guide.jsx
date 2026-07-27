import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-guide');
}

export default function BestXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-guide" />;
}
