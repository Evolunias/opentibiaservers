import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-tibia');
}

export default function BestTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-tibia" />;
}
