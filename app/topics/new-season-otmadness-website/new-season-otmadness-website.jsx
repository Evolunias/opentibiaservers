import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-website');
}

export default function NewSeasonOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-website" />;
}
