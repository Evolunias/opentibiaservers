import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-forum');
}

export default function NewTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-forum" />;
}
