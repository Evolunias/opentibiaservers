import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-forum');
}

export default function FreshStartAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-forum" />;
}
