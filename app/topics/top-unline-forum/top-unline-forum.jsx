import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-forum');
}

export default function TopUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="top-unline-forum" />;
}
