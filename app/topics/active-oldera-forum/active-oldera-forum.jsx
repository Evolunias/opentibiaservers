import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-forum');
}

export default function ActiveOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-forum" />;
}
