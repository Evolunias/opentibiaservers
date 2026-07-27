import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-season');
}

export default function ThaisotSeasonKeywordPage() {
  return <StaticKeywordPage slug="thaisot-season" />;
}
