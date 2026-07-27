import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-open-tibia-alternatives');
}

export default function SoleraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="solera-open-tibia-alternatives" />;
}
