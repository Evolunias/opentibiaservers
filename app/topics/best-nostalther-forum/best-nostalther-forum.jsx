import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-forum');
}

export default function BestNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-forum" />;
}
