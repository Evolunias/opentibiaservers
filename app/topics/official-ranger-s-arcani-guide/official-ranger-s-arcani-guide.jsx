import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-guide');
}

export default function OfficialRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-guide" />;
}
