import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-ot');
}

export default function PopularCanobOtKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-ot" />;
}
