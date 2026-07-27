import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-guide');
}

export default function NewSeasonMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-guide" />;
}
