import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-website');
}

export default function OfficialNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-website" />;
}
