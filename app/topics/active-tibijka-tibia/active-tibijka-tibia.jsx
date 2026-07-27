import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-tibia');
}

export default function ActiveTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-tibia" />;
}
