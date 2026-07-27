import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-tibia');
}

export default function TopTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-tibia" />;
}
