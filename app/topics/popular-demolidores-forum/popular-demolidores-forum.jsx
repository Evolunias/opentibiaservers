import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-forum');
}

export default function PopularDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-forum" />;
}
