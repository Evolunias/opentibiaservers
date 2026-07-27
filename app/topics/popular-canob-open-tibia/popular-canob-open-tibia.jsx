import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-open-tibia');
}

export default function PopularCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-open-tibia" />;
}
