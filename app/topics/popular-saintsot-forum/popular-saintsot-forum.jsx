import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-forum');
}

export default function PopularSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-forum" />;
}
