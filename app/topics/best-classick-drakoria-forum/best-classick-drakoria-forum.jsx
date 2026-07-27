import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-forum');
}

export default function BestClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-forum" />;
}
