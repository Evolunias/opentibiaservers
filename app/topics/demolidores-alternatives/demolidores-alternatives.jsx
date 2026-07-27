import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-alternatives');
}

export default function DemolidoresAlternativesKeywordPage() {
  return <StaticKeywordPage slug="demolidores-alternatives" />;
}
