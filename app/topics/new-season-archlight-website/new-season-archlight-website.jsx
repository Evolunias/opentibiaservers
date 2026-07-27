import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-website');
}

export default function NewSeasonArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-website" />;
}
