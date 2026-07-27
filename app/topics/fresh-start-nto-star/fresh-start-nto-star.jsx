import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star');
}

export default function FreshStartNtoStarKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star" />;
}
