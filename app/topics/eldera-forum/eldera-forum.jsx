import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-forum');
}

export default function ElderaForumKeywordPage() {
  return <StaticKeywordPage slug="eldera-forum" />;
}
