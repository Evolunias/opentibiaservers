import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-open-tibia-alternatives');
}

export default function PytheraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="pythera-open-tibia-alternatives" />;
}
