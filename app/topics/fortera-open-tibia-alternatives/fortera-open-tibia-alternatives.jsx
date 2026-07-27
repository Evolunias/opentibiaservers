import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-open-tibia-alternatives');
}

export default function ForteraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="fortera-open-tibia-alternatives" />;
}
