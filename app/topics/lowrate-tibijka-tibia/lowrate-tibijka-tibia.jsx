import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-tibia');
}

export default function LowrateTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-tibia" />;
}
