import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-forum');
}

export default function OfficialNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-forum" />;
}
