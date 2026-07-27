import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-forum');
}

export default function TopEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-forum" />;
}
