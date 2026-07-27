import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-guide');
}

export default function OfficialAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-guide" />;
}
