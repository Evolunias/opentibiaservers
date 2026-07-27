import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-guide');
}

export default function NewRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-guide" />;
}
