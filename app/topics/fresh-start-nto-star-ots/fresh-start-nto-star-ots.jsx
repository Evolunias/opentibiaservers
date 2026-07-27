import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-ots');
}

export default function FreshStartNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-ots" />;
}
