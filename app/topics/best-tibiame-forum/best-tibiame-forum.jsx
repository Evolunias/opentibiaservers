import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-forum');
}

export default function BestTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-forum" />;
}
