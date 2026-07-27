import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-guide');
}

export default function LowrateXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-guide" />;
}
