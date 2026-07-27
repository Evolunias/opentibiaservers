import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-guide');
}

export default function TopTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-guide" />;
}
