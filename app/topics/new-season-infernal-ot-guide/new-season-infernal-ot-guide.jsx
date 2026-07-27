import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-guide');
}

export default function NewSeasonInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-guide" />;
}
