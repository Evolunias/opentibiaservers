import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-alternatives');
}

export default function UniteraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="unitera-alternatives" />;
}
