import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-forum');
}

export default function TopTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-forum" />;
}
