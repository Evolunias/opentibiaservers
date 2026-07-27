import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-open-tibia-alternatives');
}

export default function ShiveraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="shivera-open-tibia-alternatives" />;
}
