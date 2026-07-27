import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-open-tibia-alternatives');
}

export default function TrimeraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="trimera-open-tibia-alternatives" />;
}
