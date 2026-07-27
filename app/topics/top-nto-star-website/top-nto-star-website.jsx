import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-website');
}

export default function TopNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-website" />;
}
