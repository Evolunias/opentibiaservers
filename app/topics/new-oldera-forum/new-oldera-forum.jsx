import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-forum');
}

export default function NewOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-forum" />;
}
