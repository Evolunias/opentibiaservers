import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-open-tibia-alternatives');
}

export default function KyraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="kyra-open-tibia-alternatives" />;
}
