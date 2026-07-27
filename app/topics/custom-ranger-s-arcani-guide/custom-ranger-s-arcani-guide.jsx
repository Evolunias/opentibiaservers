import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-guide');
}

export default function CustomRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-guide" />;
}
