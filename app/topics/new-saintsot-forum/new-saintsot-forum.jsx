import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-forum');
}

export default function NewSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-forum" />;
}
