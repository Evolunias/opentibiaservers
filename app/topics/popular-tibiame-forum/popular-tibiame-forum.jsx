import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-forum');
}

export default function PopularTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-forum" />;
}
