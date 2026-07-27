import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-forum');
}

export default function BestEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-forum" />;
}
