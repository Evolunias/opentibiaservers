import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-guide');
}

export default function AmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="ameria-guide" />;
}
