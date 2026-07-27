import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-forum');
}

export default function CurrentTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-forum" />;
}
