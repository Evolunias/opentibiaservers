import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star');
}

export default function TopNtoStarKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star" />;
}
