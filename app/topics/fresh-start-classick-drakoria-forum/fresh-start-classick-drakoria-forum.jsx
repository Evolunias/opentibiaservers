import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-forum');
}

export default function FreshStartClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-forum" />;
}
