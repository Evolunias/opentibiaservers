import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-ot');
}

export default function NewSeasonOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-ot" />;
}
