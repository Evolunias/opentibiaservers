import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-guide');
}

export default function LowrateTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-guide" />;
}
