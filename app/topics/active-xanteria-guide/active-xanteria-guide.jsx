import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-guide');
}

export default function ActiveXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-guide" />;
}
