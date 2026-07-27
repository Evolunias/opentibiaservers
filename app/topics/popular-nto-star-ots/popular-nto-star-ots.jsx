import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-ots');
}

export default function PopularNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-ots" />;
}
