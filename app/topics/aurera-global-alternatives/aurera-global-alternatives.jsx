import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-alternatives');
}

export default function AureraGlobalAlternativesKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-alternatives" />;
}
