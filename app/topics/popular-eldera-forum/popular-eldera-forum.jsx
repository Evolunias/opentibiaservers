import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-forum');
}

export default function PopularElderaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-forum" />;
}
