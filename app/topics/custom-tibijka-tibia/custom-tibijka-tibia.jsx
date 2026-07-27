import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-tibia');
}

export default function CustomTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-tibia" />;
}
