import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-tibia');
}

export default function CurrentTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-tibia" />;
}
