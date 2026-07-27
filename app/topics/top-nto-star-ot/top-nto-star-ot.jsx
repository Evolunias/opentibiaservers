import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-ot');
}

export default function TopNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-ot" />;
}
