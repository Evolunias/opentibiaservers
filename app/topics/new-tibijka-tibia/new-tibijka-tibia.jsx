import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-tibia');
}

export default function NewTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-tibia" />;
}
