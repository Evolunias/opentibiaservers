import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-guide');
}

export default function CustomXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-guide" />;
}
