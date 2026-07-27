import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-alternatives');
}

export default function MiracleAlternativesKeywordPage() {
  return <StaticKeywordPage slug="miracle-alternatives" />;
}
