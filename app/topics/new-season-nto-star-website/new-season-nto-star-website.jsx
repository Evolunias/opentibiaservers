import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-website');
}

export default function NewSeasonNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-website" />;
}
