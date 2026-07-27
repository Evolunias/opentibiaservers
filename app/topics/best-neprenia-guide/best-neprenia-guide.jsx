import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-guide');
}

export default function BestNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-guide" />;
}
