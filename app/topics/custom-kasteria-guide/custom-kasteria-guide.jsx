import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-guide');
}

export default function CustomKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-guide" />;
}
