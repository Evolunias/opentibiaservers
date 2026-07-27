import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-forum');
}

export default function LowrateTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-forum" />;
}
