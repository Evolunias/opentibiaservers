import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-website');
}

export default function FreshStartNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-website" />;
}
