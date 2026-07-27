import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka');
}

export default function TopTibijkaKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka" />;
}
