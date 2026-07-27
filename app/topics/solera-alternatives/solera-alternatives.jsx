import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-alternatives');
}

export default function SoleraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="solera-alternatives" />;
}
