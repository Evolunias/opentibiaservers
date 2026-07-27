import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-forum');
}

export default function PopularAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-forum" />;
}
