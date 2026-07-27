import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-forum');
}

export default function NewRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-forum" />;
}
