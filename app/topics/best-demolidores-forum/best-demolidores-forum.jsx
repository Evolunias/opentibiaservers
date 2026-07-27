import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-forum');
}

export default function BestDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-forum" />;
}
