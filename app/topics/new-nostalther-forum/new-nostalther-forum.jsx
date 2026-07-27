import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-forum');
}

export default function NewNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-forum" />;
}
