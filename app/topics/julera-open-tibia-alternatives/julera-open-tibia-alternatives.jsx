import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-open-tibia-alternatives');
}

export default function JuleraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="julera-open-tibia-alternatives" />;
}
