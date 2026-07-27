import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-website');
}

export default function ActiveNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-website" />;
}
