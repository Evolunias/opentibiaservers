import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-forum');
}

export default function CurrentDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-forum" />;
}
