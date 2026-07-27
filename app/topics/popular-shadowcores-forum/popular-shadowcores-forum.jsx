import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-forum');
}

export default function PopularShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-forum" />;
}
