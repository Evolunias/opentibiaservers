import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-forum');
}

export default function PopularRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-forum" />;
}
