import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-forum');
}

export default function NoResetDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-forum" />;
}
