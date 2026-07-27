import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-ot');
}

export default function PopularNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-ot" />;
}
