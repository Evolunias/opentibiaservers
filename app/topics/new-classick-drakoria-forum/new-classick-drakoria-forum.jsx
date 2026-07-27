import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-forum');
}

export default function NewClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-forum" />;
}
