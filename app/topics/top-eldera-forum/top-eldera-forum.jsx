import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-forum');
}

export default function TopElderaForumKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-forum" />;
}
