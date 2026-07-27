import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-official');
}

export default function NewSeasonOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-official" />;
}
