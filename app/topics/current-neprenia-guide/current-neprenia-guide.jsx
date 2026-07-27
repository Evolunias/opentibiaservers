import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-guide');
}

export default function CurrentNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-guide" />;
}
