import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-guide');
}

export default function NewSeasonRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-guide" />;
}
