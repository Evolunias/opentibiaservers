import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-forum');
}

export default function TopThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-forum" />;
}
