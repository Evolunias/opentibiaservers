import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-forum');
}

export default function ActiveTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-forum" />;
}
