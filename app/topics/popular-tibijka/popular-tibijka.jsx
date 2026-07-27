import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka');
}

export default function PopularTibijkaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka" />;
}
