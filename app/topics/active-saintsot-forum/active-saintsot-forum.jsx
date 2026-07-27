import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-forum');
}

export default function ActiveSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-forum" />;
}
