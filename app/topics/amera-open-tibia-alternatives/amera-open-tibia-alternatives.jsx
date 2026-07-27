import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-open-tibia-alternatives');
}

export default function AmeraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="amera-open-tibia-alternatives" />;
}
