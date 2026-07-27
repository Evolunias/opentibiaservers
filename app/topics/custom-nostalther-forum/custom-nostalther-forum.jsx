import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-forum');
}

export default function CustomNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-forum" />;
}
