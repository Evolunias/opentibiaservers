import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-forum');
}

export default function CurrentRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-forum" />;
}
