import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-alternatives');
}

export default function TibianusAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibianus-alternatives" />;
}
