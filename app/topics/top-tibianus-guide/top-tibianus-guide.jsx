import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-guide');
}

export default function TopTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-guide" />;
}
