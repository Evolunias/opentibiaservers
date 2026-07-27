import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-alternatives');
}

export default function KyraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="kyra-alternatives" />;
}
