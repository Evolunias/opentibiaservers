import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-forum');
}

export default function CustomDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-forum" />;
}
