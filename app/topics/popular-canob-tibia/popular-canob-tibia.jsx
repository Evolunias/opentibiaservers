import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-tibia');
}

export default function PopularCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-tibia" />;
}
