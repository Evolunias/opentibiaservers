import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-forum');
}

export default function DemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="demolidores-forum" />;
}
