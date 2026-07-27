import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-forum');
}

export default function TopSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-forum" />;
}
