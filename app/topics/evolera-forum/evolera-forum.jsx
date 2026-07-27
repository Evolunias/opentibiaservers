import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-forum');
}

export default function EvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="evolera-forum" />;
}
