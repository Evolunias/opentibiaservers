import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-forum');
}

export default function PopularEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-forum" />;
}
