import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-forum');
}

export default function NewDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-forum" />;
}
