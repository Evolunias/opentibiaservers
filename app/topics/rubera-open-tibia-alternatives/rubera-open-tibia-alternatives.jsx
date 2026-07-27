import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-open-tibia-alternatives');
}

export default function RuberaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="rubera-open-tibia-alternatives" />;
}
