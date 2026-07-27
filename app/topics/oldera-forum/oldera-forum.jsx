import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-forum');
}

export default function OlderaForumKeywordPage() {
  return <StaticKeywordPage slug="oldera-forum" />;
}
