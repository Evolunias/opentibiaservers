import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-open-tibia');
}

export default function LowrateTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-open-tibia" />;
}
