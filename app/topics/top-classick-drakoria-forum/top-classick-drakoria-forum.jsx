import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-forum');
}

export default function TopClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-forum" />;
}
