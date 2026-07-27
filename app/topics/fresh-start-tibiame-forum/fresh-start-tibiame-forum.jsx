import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-forum');
}

export default function FreshStartTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-forum" />;
}
