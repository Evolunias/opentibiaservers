import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-website');
}

export default function NtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="nto-star-website" />;
}
