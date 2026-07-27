import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-website');
}

export default function NewSeasonKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-website" />;
}
