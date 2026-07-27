import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-guide');
}

export default function ActiveNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-guide" />;
}
