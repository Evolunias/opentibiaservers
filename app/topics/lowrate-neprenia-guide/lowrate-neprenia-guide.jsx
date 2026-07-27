import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-guide');
}

export default function LowrateNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-guide" />;
}
