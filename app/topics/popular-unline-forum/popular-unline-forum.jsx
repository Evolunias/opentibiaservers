import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-forum');
}

export default function PopularUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-forum" />;
}
