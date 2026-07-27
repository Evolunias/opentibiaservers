import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-alternatives');
}

export default function OceraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="ocera-alternatives" />;
}
