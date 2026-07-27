import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-forum');
}

export default function ActiveNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-forum" />;
}
