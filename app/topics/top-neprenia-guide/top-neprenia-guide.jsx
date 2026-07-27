import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-guide');
}

export default function TopNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-guide" />;
}
