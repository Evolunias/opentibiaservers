import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-open-tibia');
}

export default function BestTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-open-tibia" />;
}
