import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-guide');
}

export default function NewSeasonHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-guide" />;
}
