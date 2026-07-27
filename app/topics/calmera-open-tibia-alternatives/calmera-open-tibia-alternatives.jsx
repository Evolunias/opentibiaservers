import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-open-tibia-alternatives');
}

export default function CalmeraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="calmera-open-tibia-alternatives" />;
}
