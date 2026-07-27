import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-forum');
}

export default function NoResetEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-forum" />;
}
