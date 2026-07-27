import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-guide');
}

export default function FreshStartXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-guide" />;
}
