import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-open-tibia-alternatives');
}

export default function PaceraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="pacera-open-tibia-alternatives" />;
}
