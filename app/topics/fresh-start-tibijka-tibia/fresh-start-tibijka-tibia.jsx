import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-tibia');
}

export default function FreshStartTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-tibia" />;
}
