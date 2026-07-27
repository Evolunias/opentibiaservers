import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-forum');
}

export default function ClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-forum" />;
}
