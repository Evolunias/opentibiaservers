import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-forum');
}

export default function ActiveEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-forum" />;
}
