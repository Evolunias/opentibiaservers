import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-guide');
}

export default function KasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="kasteria-guide" />;
}
