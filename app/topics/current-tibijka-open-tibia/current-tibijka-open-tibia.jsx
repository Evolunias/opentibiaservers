import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-open-tibia');
}

export default function CurrentTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-open-tibia" />;
}
