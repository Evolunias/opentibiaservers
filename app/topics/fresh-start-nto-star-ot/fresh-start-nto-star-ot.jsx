import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-ot');
}

export default function FreshStartNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-ot" />;
}
