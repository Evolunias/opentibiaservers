import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-forum');
}

export default function PopularClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-forum" />;
}
