import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-forum');
}

export default function NewEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-forum" />;
}
