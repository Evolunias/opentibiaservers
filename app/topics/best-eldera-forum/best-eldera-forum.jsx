import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-forum');
}

export default function BestElderaForumKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-forum" />;
}
