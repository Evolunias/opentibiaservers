import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-forum');
}

export default function OldSchoolRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-forum" />;
}
