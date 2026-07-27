import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-forum');
}

export default function MyaacForumKeywordPage() {
  return <StaticKeywordPage slug="myaac-forum" />;
}
