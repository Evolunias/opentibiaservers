import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-guide');
}

export default function CustomNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-guide" />;
}
