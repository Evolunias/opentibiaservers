import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-forum');
}

export default function OfficialOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-forum" />;
}
