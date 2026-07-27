import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star');
}

export default function PopularNtoStarKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star" />;
}
