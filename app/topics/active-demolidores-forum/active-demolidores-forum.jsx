import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-forum');
}

export default function ActiveDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-forum" />;
}
