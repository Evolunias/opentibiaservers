import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-guide');
}

export default function LowrateTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-guide" />;
}
