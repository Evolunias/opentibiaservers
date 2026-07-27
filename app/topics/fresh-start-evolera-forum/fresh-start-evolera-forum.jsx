import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-forum');
}

export default function FreshStartEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-forum" />;
}
