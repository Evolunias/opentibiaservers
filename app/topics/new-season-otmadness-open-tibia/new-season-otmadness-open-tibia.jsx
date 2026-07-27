import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-open-tibia');
}

export default function NewSeasonOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-open-tibia" />;
}
