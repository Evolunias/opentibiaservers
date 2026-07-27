import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-forum');
}

export default function NostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="nostalther-forum" />;
}
