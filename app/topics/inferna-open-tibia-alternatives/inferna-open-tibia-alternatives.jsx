import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-open-tibia-alternatives');
}

export default function InfernaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="inferna-open-tibia-alternatives" />;
}
