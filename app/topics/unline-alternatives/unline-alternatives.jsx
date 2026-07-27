import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-alternatives');
}

export default function UnlineAlternativesKeywordPage() {
  return <StaticKeywordPage slug="unline-alternatives" />;
}
