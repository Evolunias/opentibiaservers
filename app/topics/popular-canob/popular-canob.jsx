import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob');
}

export default function PopularCanobKeywordPage() {
  return <StaticKeywordPage slug="popular-canob" />;
}
