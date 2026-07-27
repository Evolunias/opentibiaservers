import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-forum');
}

export default function TibiameForumKeywordPage() {
  return <StaticKeywordPage slug="tibiame-forum" />;
}
