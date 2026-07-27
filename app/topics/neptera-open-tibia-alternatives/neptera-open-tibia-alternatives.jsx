import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-open-tibia-alternatives');
}

export default function NepteraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="neptera-open-tibia-alternatives" />;
}
