import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-alternatives');
}

export default function ShadowcoresAlternativesKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-alternatives" />;
}
