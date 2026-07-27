import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-open-tibia-alternatives');
}

export default function AsteraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="astera-open-tibia-alternatives" />;
}
