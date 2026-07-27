import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-alternatives');
}

export default function LuceraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="lucera-alternatives" />;
}
