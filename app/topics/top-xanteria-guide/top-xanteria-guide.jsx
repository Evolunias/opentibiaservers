import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-guide');
}

export default function TopXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-guide" />;
}
