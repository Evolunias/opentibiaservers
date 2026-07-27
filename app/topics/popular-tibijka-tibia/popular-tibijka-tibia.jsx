import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-tibia');
}

export default function PopularTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-tibia" />;
}
