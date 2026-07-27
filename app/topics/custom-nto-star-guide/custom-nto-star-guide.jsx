import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-guide');
}

export default function CustomNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-guide" />;
}
