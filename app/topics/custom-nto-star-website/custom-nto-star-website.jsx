import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-website');
}

export default function CustomNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-website" />;
}
