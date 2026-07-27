import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-forum');
}

export default function TopAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-forum" />;
}
