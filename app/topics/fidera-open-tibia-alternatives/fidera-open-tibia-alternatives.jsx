import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-open-tibia-alternatives');
}

export default function FideraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="fidera-open-tibia-alternatives" />;
}
