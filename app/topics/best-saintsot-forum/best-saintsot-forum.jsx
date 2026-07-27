import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-forum');
}

export default function BestSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-forum" />;
}
