import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-guide');
}

export default function NewNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-guide" />;
}
