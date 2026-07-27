import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-website');
}

export default function BestNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-website" />;
}
