import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-open-tibia-alternatives');
}

export default function LuceraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="lucera-open-tibia-alternatives" />;
}
