import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-forum');
}

export default function CustomRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-forum" />;
}
