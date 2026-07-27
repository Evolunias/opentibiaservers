import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-forum');
}

export default function CurrentEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-forum" />;
}
