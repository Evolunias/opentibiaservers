import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-alternatives');
}

export default function OlderaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="oldera-alternatives" />;
}
