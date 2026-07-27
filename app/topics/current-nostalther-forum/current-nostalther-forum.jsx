import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-forum');
}

export default function CurrentNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-forum" />;
}
