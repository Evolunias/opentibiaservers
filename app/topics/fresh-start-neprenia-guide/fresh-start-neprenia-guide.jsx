import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-guide');
}

export default function FreshStartNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-guide" />;
}
