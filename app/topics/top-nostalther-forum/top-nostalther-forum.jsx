import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-forum');
}

export default function TopNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-forum" />;
}
