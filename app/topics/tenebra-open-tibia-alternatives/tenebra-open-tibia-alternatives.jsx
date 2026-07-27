import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-open-tibia-alternatives');
}

export default function TenebraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tenebra-open-tibia-alternatives" />;
}
