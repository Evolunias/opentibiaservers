import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-ots');
}

export default function TopNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-ots" />;
}
