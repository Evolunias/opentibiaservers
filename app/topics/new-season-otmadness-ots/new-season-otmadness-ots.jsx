import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-ots');
}

export default function NewSeasonOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-ots" />;
}
