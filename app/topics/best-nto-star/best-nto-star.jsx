import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star');
}

export default function BestNtoStarKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star" />;
}
