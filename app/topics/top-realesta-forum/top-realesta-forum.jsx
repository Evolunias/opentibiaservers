import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-forum');
}

export default function TopRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-forum" />;
}
