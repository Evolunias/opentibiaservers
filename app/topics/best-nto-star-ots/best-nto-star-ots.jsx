import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-ots');
}

export default function BestNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-ots" />;
}
