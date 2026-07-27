import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-open-tibia-alternatives');
}

export default function IsaraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="isara-open-tibia-alternatives" />;
}
