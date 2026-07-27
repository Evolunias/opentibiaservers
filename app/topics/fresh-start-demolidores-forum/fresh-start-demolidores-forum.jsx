import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-forum');
}

export default function FreshStartDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-forum" />;
}
