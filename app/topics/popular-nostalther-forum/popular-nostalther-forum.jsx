import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-forum');
}

export default function PopularNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-forum" />;
}
