import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-forum');
}

export default function RangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-forum" />;
}
