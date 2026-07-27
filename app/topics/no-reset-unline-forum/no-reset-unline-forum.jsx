import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-forum');
}

export default function NoResetUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-forum" />;
}
