import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-alternatives');
}

export default function AmeriaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="ameria-alternatives" />;
}
