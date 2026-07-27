import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-open-tibia');
}

export default function PopularTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-open-tibia" />;
}
