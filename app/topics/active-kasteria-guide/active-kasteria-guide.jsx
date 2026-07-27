import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-guide');
}

export default function ActiveKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-guide" />;
}
