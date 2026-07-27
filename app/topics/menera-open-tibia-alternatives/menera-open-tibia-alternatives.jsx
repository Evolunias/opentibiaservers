import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-open-tibia-alternatives');
}

export default function MeneraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="menera-open-tibia-alternatives" />;
}
