import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-forum');
}

export default function CustomEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-forum" />;
}
