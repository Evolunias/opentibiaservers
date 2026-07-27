import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-guide');
}

export default function NtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="nto-star-guide" />;
}
