import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-website');
}

export default function NewSeasonMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-website" />;
}
