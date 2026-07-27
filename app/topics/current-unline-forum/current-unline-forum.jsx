import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-forum');
}

export default function CurrentUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="current-unline-forum" />;
}
