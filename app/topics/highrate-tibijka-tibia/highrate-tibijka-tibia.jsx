import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-tibia');
}

export default function HighrateTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-tibia" />;
}
