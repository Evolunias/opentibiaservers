import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-alternatives');
}

export default function AnticaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="antica-alternatives" />;
}
