import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-forum');
}

export default function NoResetOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-forum" />;
}
