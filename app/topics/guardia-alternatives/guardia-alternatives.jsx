import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-alternatives');
}

export default function GuardiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="guardia-alternatives" />;
}
