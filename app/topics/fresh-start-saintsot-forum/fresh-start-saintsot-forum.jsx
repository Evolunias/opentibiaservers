import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-forum');
}

export default function FreshStartSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-forum" />;
}
