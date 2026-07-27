import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-forum');
}

export default function NoResetElderaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-forum" />;
}
