import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-open-tibia-alternatives');
}

export default function VineraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="vinera-open-tibia-alternatives" />;
}
