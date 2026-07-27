import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness');
}

export default function NewSeasonOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness" />;
}
