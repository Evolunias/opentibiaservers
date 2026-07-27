import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-ots');
}

export default function PopularCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-ots" />;
}
