import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-forum');
}

export default function CustomTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-forum" />;
}
