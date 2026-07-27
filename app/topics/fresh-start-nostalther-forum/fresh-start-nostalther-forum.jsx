import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-forum');
}

export default function FreshStartNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-forum" />;
}
