import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-website');
}

export default function NewSeasonNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-website" />;
}
