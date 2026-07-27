import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-tibia');
}

export default function TibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-tibia" />;
}
