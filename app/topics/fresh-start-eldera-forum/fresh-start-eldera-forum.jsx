import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-forum');
}

export default function FreshStartElderaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-forum" />;
}
