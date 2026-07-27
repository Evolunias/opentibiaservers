import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-open-tibia-alternatives');
}

export default function HoneraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="honera-open-tibia-alternatives" />;
}
