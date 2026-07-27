import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-forum');
}

export default function OfficialTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-forum" />;
}
