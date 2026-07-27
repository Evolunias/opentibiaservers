import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-forum');
}

export default function ActiveAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-forum" />;
}
