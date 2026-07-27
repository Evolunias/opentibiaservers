import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-website');
}

export default function NewSeasonBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-website" />;
}
