import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-forum');
}

export default function BestUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="best-unline-forum" />;
}
