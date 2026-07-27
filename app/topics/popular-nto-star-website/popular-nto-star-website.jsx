import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-website');
}

export default function PopularNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-website" />;
}
