import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-forum');
}

export default function PopularKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-forum" />;
}
