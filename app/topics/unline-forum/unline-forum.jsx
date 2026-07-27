import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-forum');
}

export default function UnlineForumKeywordPage() {
  return <StaticKeywordPage slug="unline-forum" />;
}
