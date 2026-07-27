import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-forum');
}

export default function BestRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-forum" />;
}
